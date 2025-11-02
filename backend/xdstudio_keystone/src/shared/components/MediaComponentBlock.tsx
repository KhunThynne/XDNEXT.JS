import { component, fields } from '@keystone-6/fields-document/component-blocks';
export const MediaComponentBlock = {
  source: component({
    // 1. นี่คือ UI ในตัวแก้ไข
    label: 'Media (รูปภาพ/วิดีโอ)',
    preview: (props) => {
      // // แสดงตัวอย่างคร่าวๆ ใน Editor
      // const mediaType = props.fields.mediaType.value;
      // const alt = props.fields.altText.value;
      return (
        <div style={{ padding: '10px', background: '#eee', borderRadius: '5px' }}>
          {/* <strong>🖼️ Media Block:</strong> {mediaType}
          {alt ? ` (Alt: ${alt})` : ''} */}
        </div>
      );
    },
    chromeless: true,
    // 2. นี่คือ Schema ของฟิลด์ที่จะลอยขึ้นมา
    schema: {
      // mediaType: fields.select({
      //   label: 'ประเภทสื่อ',
      //   options: [
      //     { label: 'รูปภาพ (อัปโหลด)', value: 'imageRelation' },
      //     { label: 'รูปภาพ (จาก URL)', value: 'imageUrl' },
      //     { label: 'วิดีโอ (จาก URL)', value: 'videoUrl' },
      //   ],
      //   defaultValue: 'imageRelation',
      // }),

      // ฟิลด์สำหรับ "รูปภาพ (อัปโหลด)"
      //   image: fields.relationship({
      //     label: 'เลือกรูปภาพ',

      //     // !! ใช้ 'conditional' (แทน 'dependsOn' ใน Document field)
      //     ui: {
      //       // ซ่อนฟิลด์นี้ ถ้า mediaType ไม่ใช่ 'imageRelation'
      //       itemView: {
      //         fieldMode: (props) =>
      //           props.item.mediaType.value === 'imageRelation' ? 'edit' : 'hidden',
      //       },
      //     },
      //   }),

      imageUrl: fields.text({
        label: 'ลิงก์รูปภาพ (URL)',
        // ui: {
        //   itemView: {
        //     fieldMode: (props) => (props.item.mediaType.value === 'imageUrl' ? 'edit' : 'hidden'),
        //   },
        // },
      }),

      // videoUrl: fields.text({
      //   label: 'ลิงก์วิดีโอ (URL)',
      //   // ui: {
      //   //   itemView: {
      //   //     fieldMode: (props) => (props.item.mediaType.value === 'videoUrl' ? 'edit' : 'hidden'),
      //   //   },
      //   // },
      // }),

      // altText: fields.text({
      //   label: 'Alt Text (คำอธิบายรูปภาพ)',
      //   // validation: { isRequired: true },
      //   defaultValue: 'Media',
      // }),
      // caption: fields.text({
      //   label: 'คำบรรยายใต้ภาพ (Caption)',
      // }),
    },
  }),
};
