<template>

  <div class="row items-start justify-center">
    <div class="col-3">
      <q-page class="row" style="height: 95%">
        <recent-activity
          title="GitLab MR History"
          active
          :historyItems="historyItems"
        ></recent-activity>
      </q-page>
    </div>
    <div class="col-6">

    </div>
    <div class="col-3">
      <q-page class="row">
        <recent-activity
          title="GitLab Issue History"
          active
          :historyItems="historyItems"
        ></recent-activity>
      </q-page>
    </div>
  </div>

</template>

<script lang="ts">
import { MrHistoryItem } from 'components/models';
import RecentActivity from 'components/RecentActivity.vue';
import { defineComponent, ref } from 'vue';
import HistoryService from '../services/history';

export default defineComponent({
  name: 'IndexPage',
  components: { RecentActivity },
  setup () {
    const historyItems = ref<MrHistoryItem[]>([
      { id: 1, repo: 'gittab', name: 'Create initial MR support', url: 'http://test.de', lastVisitTime: 1 },
      { id: 2, repo: 'akhq', name: 'Add support for tombstones visa Produce to topic', url: 'http://test.de', lastVisitTime: 1 },
            { id: 1, repo: 'gittab', name: 'Create initial MR support', url: 'http://test.de', lastVisitTime: 1 },
      { id: 2, repo: 'akhq', name: 'Add support for tombstones visa Produce to topic', url: 'http://test.de', lastVisitTime: 1 },
            { id: 1, repo: 'gittab', name: 'Create initial MR support', url: 'http://test.de', lastVisitTime: 1 },
      { id: 2, repo: 'akhq', name: 'Add support for tombstones visa Produce to topic', url: 'http://test.de', lastVisitTime: 1 },
            { id: 1, repo: 'gittab', name: 'Create initial MR support', url: 'http://test.de', lastVisitTime: 1 },
      { id: 2, repo: 'akhq', name: 'Add support for tombstones visa Produce to topic', url: 'http://test.de', lastVisitTime: 1 },
            { id: 1, repo: 'gittab', name: 'Create initial MR support', url: 'http://test.de', lastVisitTime: 1 },
      { id: 2, repo: 'akhq', name: 'Add support for tombstones visa Produce to topic', url: 'http://test.de', lastVisitTime: 1 },
            { id: 1, repo: 'gittab', name: 'Create initial MR support', url: 'http://test.de', lastVisitTime: 1 },
      { id: 2, repo: 'akhq', name: 'Add support for tombstones visa Produce to topic', url: 'http://test.de', lastVisitTime: 1 },
    ]);

    // TODO Populate HistoryItems from Chrome API
    //HistoryService.getHistory();

    return { historyItems };
  },
  test() {
    this.$q.bex.send('history.search', {}).then(event => {
      return event.data
    })
  }
});
</script>
