import React from "react";
import { supabase } from "../supabase/client";

const UserProfile = () => {
  return (
    <div>
      UserProfile
      <div>
        <button
          onClick={() => supabase.auth.signOut()}
          class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
