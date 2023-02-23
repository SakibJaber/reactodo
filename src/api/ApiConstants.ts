export const ApiConstants = {
  TODO: {
    ADD: (userId: number) => {
      return "/todos/" + userId;
    },
    FIND_NOT_COMPLETED: (userId: number) => {
      return "/todos/findAllNC/" + userId;
    },
    FIND_COMPLETED: (userId: number) => {
      return "/todos/findAllC/" + userId;
    },
    MARK_COMPLETE: (todoId: number) => {
      return "/todos/" + todoId;
    },
    DELETE: (todoId: number) => {
      return "/todos/" + todoId;
    },
  },
  USER: {
    SIGN_UP: "/user/signup",
    FIND_ALL: "/user",
    DELETE: (userId: number) => {
      return "/user/" + userId;
    },
  },
  LOGIN: "/auth/login",
};
