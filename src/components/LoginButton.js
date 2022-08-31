import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0(); 
    return (
        <div class="centerBox">
        
        <div class="categoryWrapper">
            <h1>BINARY - CRM</h1>
            <button onClick={() => loginWithRedirect()}>
                <span>
                    <span>
                        <span data-attr-span="Log in">
                            Log in
                        </span>
                    </span>
                </span>
            </button>
        </div>
        
    </div>      
    );
}

export default LoginButton;