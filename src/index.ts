import {User} from "./models/User";
import {UserEdit} from "./views/UserEdit";

const user = User.buildUser({id:1});
user.fetch();
const userEdit = new UserEdit(document.getElementById("root"),user);

userEdit.render()
