<template>
	<button
		class="button"
		:class="{'button--full': full, 'button--remove u-v-centered': remove}"
	>
		{{ text }}
		<IconDelete
			v-if="remove"
			fill="#fff"
		/>
	</button>
</template>

<script>
import IconDelete from "~/assets/delete-24px.svg?inline";

export default {
	name: "Button",
	components: {IconDelete},
	props: {
		text: { type: String, required: true },
		full: { type: Boolean },
		remove: { type: Boolean }
	}
};
</script>

<style lang="scss">
.button {
  -webkit-appearance: none;
  border: 0;
  min-width: 60px;
  min-height: 40px;
  border-radius: 2px;
  padding: 0 var(--m);
  margin: var(--m) 0;
  cursor: pointer;
  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  background-color: var(--color-primary);
  transition: background-color 0.2s ease;
  color: #fff;

  &:hover {
    background-color: var(--color-primary-hover);
  }

  &--remove {
    color: #fff;
  }
  &--full {
    width: calc(100% - 16px);
  }
}
</style>