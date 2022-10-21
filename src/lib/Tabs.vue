<template>
  <div class="zulu-tabs">
    <div class="zulu-tabs-nav" ref="container">
      <div
        class="zulu-tabs-nav-item"
        v-for="(t, index) in titles"
        :ref="
          (el) => {
            if (t === selected) selectedItem = el;
          }
        "
        @click="select(t)"
        :class="{ selected: t === selected }"
        :key="index"
      >
        {{ t }}
      </div>
      <div class="zulu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="zulu-tabs-content">
      <component
        :is="current"
        :key="current.props.title"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import Tab from "./Tab.vue";
  import { computed, onMounted, ref, useSlots, watchEffect } from "vue";
  const props = defineProps({
    selected: String,
  });
  const emit = defineEmits(["update:selected"]);
  const slot = useSlots();
  const selectedItem = ref<HTMLDivElement>(null);
  const indicator = ref<HTMLDivElement>(null);
  const container = ref<HTMLDivElement>(null);
  onMounted(() => {
    watchEffect(() => {
      const { width } = selectedItem.value.getBoundingClientRect();
      indicator.value.style.width = width + "px";
      const { left: left1 } = container.value.getBoundingClientRect();
      const { left: left2 } = selectedItem.value.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + "px";
    });
  });
  const defaults = slot.default ? slot.default() : [];
  const current = computed(() => {
    return defaults.find(
      (tag) => tag.props && tag.props.title === props.selected
    );
  });
  const select = (title: string) => {
    emit("update:selected", title);
  };
  defaults &&
    defaults.forEach((element: any) => {
      if (element.type !== Tab) {
        throw new Error("Tabs子标签必须是Tab");
      }
    });
  const titles =
    defaults &&
    defaults.map((element: any) => {
      return element.props.title;
    });
</script>
<style lang="scss">
  $blue: #40a9ff;
  $color: #333;
  $border-color: #d9d9d9;
  .zulu-tabs {
    &-nav {
      display: flex;
      color: $color;
      border-bottom: 1px solid $border-color;
      position: relative;
      &-item {
        padding: 8px 0;
        margin: 0 16px;
        cursor: pointer;
        &:first-child {
          margin-left: 0;
        }
        &.selected {
          color: $blue;
        }
      }
      &-indicator {
        position: absolute;
        height: 3px;
        background: $blue;
        left: 0;
        bottom: -1px;
        width: 100px;
        transition: all 250ms;
      }
    }
    &-content {
      padding: 8px 0;
    }
  }
</style>
