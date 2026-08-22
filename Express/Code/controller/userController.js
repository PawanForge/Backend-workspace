import { userList } from "../model/userModel.js";

export function handleUsers(req, res) {
  const users = userList();

  res.render("user", { users });
}