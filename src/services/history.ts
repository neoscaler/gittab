import { useQuasar } from 'quasar'

const $q = useQuasar();

export default {

  getHistory() {

    return $q.bex.send('history.search', {}).then(event => {
      return event.data
    })
  }

}
