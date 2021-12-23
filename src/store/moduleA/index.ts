import { Module, VuexModule, Mutation, Action, getModule } from "vuex-module-decorators";

import rootStore from "@/store";

@Module({
  name: "ModuleA",
  dynamic: true,
  namespaced: true,
  store: rootStore,
})
class ModuleA extends VuexModule {
  private count = 0;

  public get getCount(): number {
    return this.count;
  }

  @Mutation
  public increment(value: number) {
    this.count += value;
  }

  @Mutation
  public decrement(value: number) {
    this.count -= value;
  }

  @Action({ commit: "increment" })
  incr() {
    return 1;
  }

  @Action({ commit: "decrement" })
  decr() {
    return 1;
  }
}

export default getModule(ModuleA);
