<template>
  <div class="q-pa-sm" style="width:100%">
    <div class="text-h5 q-py-md text-info">{{ title }}</div>

    <q-scroll-area style="height: 92%;">
      <q-list separator>
        <q-item class="q-py-md" clickable v-ripple v-for="historyItem in historyItems" :key="historyItem.id"
          @click="openSite(historyItem.url)">
          <q-item-section>
            <q-item-label overline class="q-py-sm">Repo: {{ historyItem.repo }}</q-item-label>
            <q-item-label caption>{{ historyItem.name }}</q-item-label>
          </q-item-section>
          <q-item-section side top>
            <q-item-label caption class="q-py-sm">5 min ago</q-item-label>
            <q-item-label caption class="text-negative">MR !{{ historyItem.id }}</q-item-label>
          </q-item-section>
          </q-item>

      </q-list>
    </q-scroll-area>

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
    },
    created () {
      this.$q.bex.send('history.search', {}).then(event => {
        return event.data
      })
    }
  }
});
</script>
