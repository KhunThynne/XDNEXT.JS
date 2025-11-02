import { component, fields, NotEditable } from '@keystone-6/fields-document/component-blocks';

export const componentBlocks = {
  carousel: component({
    label: 'Carousel',
    preview: function Preview(props) {
      return (
        <NotEditable>
          <div style={{ overflow: 'scroll', display: 'flex', scrollSnapType: 'y mandatory' }}>
            {props.fields.items.elements.map((item) => {
              const title = item.fields.title;
              const media = item.fields.media;
              let imageUrl = 'https://via.placeholder.com/400x240?text=No+Image'; // URL สำรอง

              if (media.discriminant) {
                if (media.discriminant === 'url') {
                  imageUrl = media.value.value;
                } else if (media.discriminant === 'relationship') {
                  imageUrl = media.value.value?.data.src.url;
                }
              }
              return (
                <div
                  key={item.key}
                  style={{
                    minWidth: `61.8%`,
                    scrollSnapAlign: 'center',
                    scrollSnapStop: 'always',
                    margin: 4,
                    padding: 8,
                    boxSizing: 'border-box',
                    borderRadius: 6,
                    background: '#eff3f6',
                  }}
                >
                  <img
                    role="presentation"
                    src={imageUrl || 'https://via.placeholder.com/400x240?text=No+Image'}
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center center',
                      height: 240,
                      width: '100%',
                      borderRadius: 4,
                      aspectRatio: '1 / 1',
                    }}
                  />
                  <h1 style={{ fontSize: `1.25rem`, lineHeight: `unset`, marginTop: 8 }}>
                    {item.fields.title.value}
                  </h1>
                </div>
              );
            })}
          </div>
        </NotEditable>
      );
    },
    schema: {
      items: fields.array(
        fields.object({
          title: fields.text({ label: 'Title', defaultValue: 'Image' }),
          media: fields.conditional(
            fields.select({
              label: 'Source Type',
              options: [
                { label: 'Enter URL Manually', value: 'url' },
                { label: 'Select from Image Library', value: 'relationship' },
              ],
              defaultValue: 'url',
            }),

            {
              url: fields.url({
                label: 'Source URL',
                defaultValue: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809',
              }),
              relationship: fields.relationship({
                listKey: 'Image',
                many: false,
                selection: 'id src { url width height } altText name',
                label: 'Image',
              }),
            },
          ),
        }),
        {
          itemLabel: (props) => {
            const title = props.fields.title;
            return `${title.value}`;
          },
        },
      ),
    },
  }),
};
