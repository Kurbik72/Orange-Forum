import { StateSchema } from "src/app/providers/StoreProvider";



export const getAvatarState = (state:StateSchema) => state?.user.authData;