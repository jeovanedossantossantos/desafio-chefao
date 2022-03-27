import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

type PropsAuthorization = {
    authorization: string;

    setAuthorization: React.Dispatch<
        React.SetStateAction<string>>;
}

const DEFAULT_VALUE = {

    authorization: "",

    setAuthorization: () => { },

};

export const AuthorizationContext = createContext<PropsAuthorization>(DEFAULT_VALUE);

const ContextProvider = ({ children }: any) => {

    const [authorization, setAuthorization] = useState(DEFAULT_VALUE.authorization)

    return (
        <AuthorizationContext.Provider
            value={{ authorization, setAuthorization }}
        >

            {children}

        </AuthorizationContext.Provider>
    );

}

export default ContextProvider