
<template>

  <div class="row items-start justify-center">
    <div class="col-3">
      <q-page class="row">
        <recent-activity
          title="GitLab History"
          active
          :historyItems="historyItems"
        ></recent-activity>
      </q-page>
    </div>
    <div class="col-6">

    </div>
    <div class="col-3">

    </div>
  </div>


</template>

<script lang="ts">
import { HistoryItem } from 'components/models';
import RecentActivity from 'components/RecentActivity.vue';
import { defineComponent, ref } from 'vue';
import HistoryService from '../services/history';

export default defineComponent({
  name: 'IndexPage',
  components: { RecentActivity },
  setup () {
    const historyItems = ref<HistoryItem[]>([
      { id: 1, title: 'Test MR', url: 'http://test.de', lastVisitTime: 1 },
      { id: 2, title: 'Test MR 2', url: 'http://test.de', lastVisitTime: 1 },
    ]);

    // TODO Populate HistoryItems from Chrome API
    //HistoryService.getHistory();

    return { historyItems };
  }
});
</script>
