<template>
  <q-page class="row items-center justify-evenly">
    <recent-activity
      title="GitLab History"
      active
      :historyItems="historyItems"
    ></recent-activity>
  </q-page>
</template>

<script lang="ts">
import { HistoryItem } from 'components/models';
import RecentActivity from 'components/RecentActivity.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { RecentActivity },
  setup () {
    const historyItems = ref<HistoryItem[]>([
      { id: 1, title: 'Test MR', url: 'http://test.de', lastVisitTime: 1 },
      { id: 2, title: 'Test MR 2', url: 'http://test.de', lastVisitTime: 1 },
    ]);

    // TODO Populate HistoryItems from Chrome API

    return { historyItems };
  }
});
</script>
