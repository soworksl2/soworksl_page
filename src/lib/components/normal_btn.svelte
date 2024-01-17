<button>
    <slot></slot>
</button>

<style>
    button {
        padding: 0.65ex 1.25ch;

        font-size: var(--normal-fs);

        background-color: var(--complementary-color-low);

        border: none;
        border-radius: var(--normal-border-radius);
    }

    button:hover {
        background-color: var(--complementary-color);
        cursor: pointer;
    }
</style>
