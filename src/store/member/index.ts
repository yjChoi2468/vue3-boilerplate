import { getModule, Module, Mutation, VuexModule } from "vuex-module-decorators";

import { PERMISSION_TYPE } from "@/constants/permission.constants";
import rootStore from "@/store";

@Module({
  name: "Member",
  dynamic: true,
  namespaced: true,
  store: rootStore,
})
class Member extends VuexModule {
  private permission: PERMISSION_TYPE = PERMISSION_TYPE.USER;

  get userPermission(): number {
    return this.permission;
  }

  @Mutation
  setPermission(permission: PERMISSION_TYPE) {
    this.permission = permission;
  }
}

export default getModule(Member);
