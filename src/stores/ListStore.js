import { observable, action } from 'mobx'
import GlobalVars from '../components/common/GlobalVars'

class ListStore {

  @observable list = []

  detail = {id: '', name: ''}

  @action addItem(){
    let add = []
    let last = this.list.length + 10
    for (let i = this.list.length; i < last; i++) {
      add.push({'id': i, 'name': 'Item_' + i})
    }
    this.list = [...this.list, ...add]
  }

  setDetail(info){
    this.detail = info
  }

  @action unmount(){
    this.list = []
    this.detail = {id: '', name: ''}
  }

}

export default new ListStore()