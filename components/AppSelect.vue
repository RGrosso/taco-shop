<template>
  <div>
    <label :for="select">What {{ select }} do you want?</label>
    <select
      @change="$emit('change', $event.target.value)"
      :name="select"
      :id="select"
    >
      <option disabled value>-- Please select a {{ select }} --</option>
      <option v-for="option in selectOptions" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    select: {
      type: String,
      default: "cuisine",
    },
    selectOptions: {
      type: Array,
      default: () => ["tacos", "pizza", "dim sum"],
    },
  },
};
</script>

<style lang="scss" scoped>
</style>