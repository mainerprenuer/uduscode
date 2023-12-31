import conf from "@/conf/config";
import { Client, Account, Databases, Storage, ID, Query } from "appwrite";

type CreateUserAccount = {
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    othername: string,
    phonenumber: string,
    state: string,
    lg: string,
    address: string,
    passport: string,
    nokfullname: string,
    nokphonenumber: string
}

type LoginUserAccount = {
    email: string,
    password: string,
}

const appwriteClient = new Client();

const storageDB = new Storage(appwriteClient);

appwriteClient
.setEndpoint(conf.appwriteUrl)
.setProject(conf.appwriteProjectId); 

export const account = new Account(appwriteClient);
export const database = new Databases(appwriteClient);
export const storage = new Storage(appwriteClient);

export class AppwriteService {
    // create a new record of user into appwrite account
    async createUserAccount({ 
        email,
        password, 
        firstname, 
        lastname, 
        othername, 
        phonenumber,
        state,
        lg,
        address,
        passport,
        nokfullname,
        nokphonenumber,
     }
        :CreateUserAccount) {
            try {
                const userAccount = await account.create(
                    ID.unique(),
                    email,
                    password, 
                    firstname,
                    lastname,
                    othername,
                    phonenumber,
                    state,
                    lg,
                    address,
                    passport,
                    nokfullname,
                    nokphonenumber
                )
                if (userAccount) {
                    //store the user account to database
                    try {
                         await database.createDocument(
                            conf.appwriteStudentsDbId, 
                            conf.appwriteStudentsRegId,
                            ID.unique(),
                            userAccount);           
                         } catch (error: any) {
                        console.error("Error creating document:", error);
                    }
                       
                    return this.login({ email, password })
                } else {
                    return userAccount
                }

            } catch (error) {
                throw error
            }
        }

    async login({ email, password}: LoginUserAccount) {
        try {
            return await account.createEmailSession(
                email,
                password,
            )    
        } catch (error) {
            throw error
        }
    }

    async isLoggedIn(): Promise<boolean> {
        try {
            const data = await this.getCurrentUser();
            return Boolean(data)
        } catch (error) {
            throw error
        }

        return false
    }

    async getCurrentUser() {
        try {
           return await account.get()
        } catch (error) {
            console.log("getCurrentUser" + error);
        }

        return null;
    }

    async logout() {
        try {
            return await account.deleteSession("current")
        } catch (error) {
            console.log("logout error: " + error);
        }
    }

}


const appwriteService = new AppwriteService()

export default  appwriteService;