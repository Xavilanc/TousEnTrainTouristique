import React from "react";
import AddAvatar from "../services/AddAvatar";
import "../assets/styles/ModifyAvatarForm.css";

function ModifyAvatarForm() {
  return (
    <div>
      <h1 className="modify_avatar_title">Modifier votre Avatar</h1>
      <AddAvatar />
    </div>
  );
}

export default ModifyAvatarForm;
