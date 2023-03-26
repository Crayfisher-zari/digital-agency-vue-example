<script lang="ts" setup>
import Heading from "digital-agency-design-system/digital-agency-design-system-vue/src/components/Heading.vue";
import Layout from "digital-agency-design-system/digital-agency-design-system-vue/src/components/Layout.vue";
import RadioGroup from "digital-agency-design-system/digital-agency-design-system-vue/src/components/RadioGroup.vue";
import Checkbox from "digital-agency-design-system/digital-agency-design-system-vue/src/components/Checkbox.vue";
import CheckboxGroup from "digital-agency-design-system/digital-agency-design-system-vue/src/components/CheckboxGroup.vue";
import Modal from "digital-agency-design-system/digital-agency-design-system-vue/src/components/Modal.vue";
import Pankuzu from "digital-agency-design-system/digital-agency-design-system-vue/src/components/Pankuzu.vue";
import { useNameInput } from "digital-agency-design-system/digital-agency-design-system-vue/src/composables/useNameInput";
import { useTelInput } from "digital-agency-design-system/digital-agency-design-system-vue/src/composables/useTelInput";
import { useTextAreaInput } from "digital-agency-design-system/digital-agency-design-system-vue/src/composables/useTextAreaInput";
import { usePagination } from "digital-agency-design-system/digital-agency-design-system-vue/src/composables/usePagination";

useHead({
  title: "コンポーネント郡",
  bodyAttrs: {
    class: "color-scheme-light",
  },
});

const handleClick = () => {
  console.log("click");
};

const { UseNameInputComponent: FamilyNameInput } = useNameInput({
  label: "姓",
  isRequired: true,
  supportText: "住民票に記載された姓を記入します。",
  placeHolder: "山田",
});
const { UseTelInputComponent: UseTelInputComponent } = useTelInput();
const { UseTextAreaInputComponent } = useTextAreaInput();

const selected = ref<string | null>(null);
const selected2 = ref<string | null>("3");
const checked = ref(["2"]);
const checked2 = ref(true);

const { UsePaginationComponent, pageNumber } = usePagination();

const isShown = ref(false);

const modalClick1 = () => {
  console.log("ボタン1");
};

const modalClick2 = () => {
  console.log("ボタン2");
};

const pankuzu = [
  { text: "ホーム", url: "#!" },
  { text: "政策", url: "#!" },
  { text: "審議会・研究会", url: "#!" },
  { text: "デジタル庁における入札制限等の在り方に関する検討会" },
];

const colorScheme = ref<"light" | "dark" | null>(null);

// カラースキームの設定
watch(colorScheme, (color) => {
  if (color === "light") {
    document.body.classList.remove("color-scheme-dark");
    document.body.classList.add("color-scheme-light");
  }
  if (color === "dark") {
    document.body.classList.remove("color-scheme-light");
    document.body.classList.add("color-scheme-dark");
  }
});
</script>
<template>
  <div>
    <Pankuzu :list="pankuzu" />
    <Heading :headingLevel="1">H1 / Bold(700) / 1.5</Heading>
    <Heading :headingLevel="2">H2 / Bold(700) / 1.5</Heading>
    <Heading :headingLevel="3">H3 / Bold(700) / 1.5</Heading>
    <Heading :headingLevel="4">H4 / Bold(700) / 1.5</Heading>
    <Heading :headingLevel="5">H5 / Bold(700) / 1.5</Heading>
    <Heading :headingLevel="6">H6 / Bold(700) / 1.5</Heading>
    <BasicButton label="ボタン" @click="handleClick"></BasicButton>
    <BasicButton
      label="ボタン"
      type="secondary"
      @click="handleClick"
    ></BasicButton>
    <BasicButton
      label="ボタン"
      type="tertiary"
      @click="handleClick"
    ></BasicButton>
    <div class="colorScheme">
      <RadioGroup
        v-model="colorScheme"
        groupLabel="テーマカラー"
        :labels="['ライトモード', 'ダークモード']"
        :values="['light', 'dark']"
        helpText="サイトのテーマカラーを選択できます"
        name="color"
        :isRequired="false"
      />
    </div>
    <div class="inputWrapper">
      <FamilyNameInput />
      <UseTelInputComponent />
      <UseTextAreaInputComponent />
      <div>
        <RadioGroup
          v-model="selected"
          groupLabel="ラベル"
          :labels="['選択肢1', '選択肢2', '選択肢3']"
          :values="['1', '2', '3']"
          helpText="ヘルプテキスト"
          errorText="エラーテキスト"
          name="group"
          :isRequired="true"
        />
      </div>
      <div>
        <RadioGroup
          v-model="selected2"
          radioStyle="tile"
          groupLabel="ラベル"
          :labels="['選択肢1', '選択肢2', '選択肢3']"
          :subTexts="['補足説明1', '補足説明2', '補足説明3']"
          :values="['1', '2', '3']"
          helpText="ヘルプテキスト"
          errorText="エラーテキスト"
          name="group2"
          :isRequired="true"
        />
      </div>
      <div>
        <CheckboxGroup
          v-model="checked"
          groupLabel="ラベル"
          :labels="['選択肢1', '選択肢2', '選択肢3']"
          :values="['1', '2', '3']"
          helpText="ヘルプテキスト"
          errorText="エラーテキスト"
          name="group3"
        />
      </div>
      <div>
        <Checkbox v-model="checked2" label="真偽値1" />
      </div>
    </div>
    <div class="tableWrapper">
      <table class="customTable">
        <thead>
          <th>Table Hader</th>
          <th>Table Hader</th>
          <th>Table Hader</th>
          <th>Table Hader</th>
          <th>Table Hader</th>
        </thead>
        <tbody>
          <tr>
            <th>Table Hader</th>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
          </tr>
          <tr>
            <th>Table Hader</th>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
          </tr>
          <tr>
            <th>Table Hader</th>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
          </tr>
          <tr>
            <th>Table Hader</th>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
          </tr>
          <tr>
            <th>Table Hader</th>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
            <td>Table Data</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <img
        :src="`https://picsum.photos/id/${pageNumber}/200/200`"
        alt=""
        width="200"
        height="200"
      />
      <UsePaginationComponent />
    </div>
    <div>
      <BasicButton
        label="モーダルを表示"
        @click="
          () => {
            isShown = true;
          }
        "
      ></BasicButton>
      <!-- <UseModalComponent /> -->
      <Modal
        v-model="isShown"
        title="タイトル"
        text="テキスト"
        labelPrimary="ボタン1"
        labelSecondary="ボタン2"
        :onClickPrimary="modalClick1"
        :onClickSecondary="modalClick2"
      />
    </div>

    <Layout>
      <div class="layoutBlock colSpan-3">4分の1</div>
      <div class="layoutBlock colSpan-6">4分の2</div>
      <div class="layoutBlock colSpan-3">4分の1</div>

      <div class="layoutBlock colSpan-3">4分の1</div>
      <div class="layoutBlock colSpan-3">4分の1</div>
      <div class="layoutBlock colSpan-3">4分の1</div>
      <div class="layoutBlock colSpan-3">4分の1</div>

      <div class="layoutBlock colSpan-9">4分の3</div>
      <div class="layoutBlock colSpan-3">4分の1</div>

      <div class="layoutBlock colSpan-9">4分の3</div>

      <div class="layoutBlock colSpan-4">3分の1</div>
      <div class="layoutBlock colSpan-4">3分の1</div>
      <div class="layoutBlock colSpan-4">3分の1</div>
    </Layout>
    <p>タブレットは2列にする</p>
    <Layout>
      <div class="layoutBlock colSpan-6 colSpanTablet-1">4分の2</div>
      <div class="layoutBlock colSpan-6 colSpanTablet-1">4分の2</div>
    </Layout>
    <p>真ん中半分だけ使う</p>
    <Layout>
      <div class="layoutBlock colStart-4 colEnd-10">4分の2</div>
    </Layout>
  </div>
</template>
<style lang="scss">
.colorScheme {
  margin: 36px 0;
}

.inputWrapper {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  width: 300px;
}

.layoutBlock {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 120px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  background-color: var(--color-background-secondary);
}
</style>
