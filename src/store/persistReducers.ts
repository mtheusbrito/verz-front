import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const res = (reducers: any) => {
  const persistentReducer = persistReducer(
    {
      key: "verzel",
      storage,
      whitelist: ['auth', 'user'],
    },
    reducers
  );
  return persistentReducer;
};

export default res;