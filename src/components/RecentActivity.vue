<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md" style="max-width: 400px">
      <q-tabs v-model="tab" narrow-indicator dense no-caps align="justify" class="text-primary">
        <q-tab name="github" icon="fa-brands fa-github" label="GitHub" />
        <q-tab name="gitlab" icon="fa-brands fa-gitlab" label="GitLab" />
      </q-tabs>
    </div>

    <q-list padding separator>

      <q-item clickable v-ripple v-for="historyItem in historyItems" :key="historyItem.id"
        @click="openSite(historyItem.url)">
        <q-item-section>
          <q-item-label>{{ historyItem.repo }}</q-item-label>
          <q-item-label caption>{{ historyItem.name }}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
          <q-icon name="bug_report" />
        </q-item-section>
      </q-item>

    </q-list>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
} from 'vue';
import { MrHistoryItem } from './models';
import { openURL } from 'quasar';

export default defineComponent({
  name: 'RecentActivity',
  props: {
    title: {
      type: String,
      required: true
    },
    historyItems: {
      type: Array as PropType<MrHistoryItem[]>,
      default: () => []
    },
    active: {
      type: Boolean
    }
  },
  methods: {
    openSite: function (url: string) {
      openURL(url);
    }
  }
});
</script>
