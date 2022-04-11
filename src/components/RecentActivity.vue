<template>
  <div class="q-pa-md" style="max-width: 350px">
    <p>{{ title }}</p>
    <q-list bordered separator>

      <q-item clickable v-ripple v-for="historyItem in historyItems" :key="historyItem.id" @click="openSite(historyItem.url)">
        <q-item-section>
          <q-item-label>{{ historyItem.title }}</q-item-label>
          <q-item-label caption>{{ historyItem.url }}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
          <q-icon name="ion-time-outline" />
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
import { HistoryItem } from './models';
import { openURL } from 'quasar';

export default defineComponent({
  name: 'RecentActivity',
  props: {
    title: {
      type: String,
      required: true
    },
    historyItems: {
      type: Array as PropType<HistoryItem[]>,
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
