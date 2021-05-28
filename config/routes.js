export const routes = {

    signIn: "/signin",
    home: "/home",
    chats: "/chats",
    chat: (userId) => `/chat/${userId}`,
    groupchat: "/groupchat",
    groups: "/groups",
    settings: "/settings",
    editProfile: "/profile/edit",
    editInterests: "/profile/edit/interests",
    profile: (userId) => `/profile/${userId}`

}