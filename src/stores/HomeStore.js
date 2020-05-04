import { computed } from 'mobx'
import GlobalVars from '../components/common/GlobalVars'

class HomeStore {

  @computed get text(){
    return "This Is Home!!!!"
  }

}

export default new HomeStore()