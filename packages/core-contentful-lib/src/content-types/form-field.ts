import * as Migration from 'contentful-migration';

export const createFormField: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType('FormField', {
    name: 'FormField',
  });
  content.createField('isRequired', { name: 'IsRequired', type: 'Boolean', required: true });

  content.createField('type', {
    name: 'Type',
    type: 'Symbol',
    required: true,
    validations: [
      {
        in: ['email', 'phone', 'shortText', 'longText'],
      },
    ],
  });

  content.createField('placeholder', {
    name: 'Placeholder',
    type: 'Symbol',
    localized: true,
  });

  content.createField('errorRequired', {
    name: 'ErrorRequired',
    type: 'Symbol',
    localized: true,
  });

  content.createField('errorInvalid', {
    name: 'ErrorInvalid',
    type: 'Symbol',
    localized: true,
  });
};
