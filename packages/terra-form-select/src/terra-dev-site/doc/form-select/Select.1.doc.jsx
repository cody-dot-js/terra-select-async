import React from 'react';
import DocTemplate from 'terra-doc-template'; // eslint-disable-line import/no-extraneous-dependencies
import ReadMe from '../../../../../../README.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import OptionSrc from '!raw-loader!../../../../src/_Option';
import OptGroupSrc from '!raw-loader!../../../../src/_OptGroup';
import SelectSrc from '!raw-loader!../../../../src/Select';

// Example Files
import DefaultExample from '../example/Default';
import DefaultExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/Default';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const Index = () => (
  <DocTemplate
    packageName="terra-form-select"
    readme={ReadMe}
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-form-select"
    propsTables={[{
      componentName: 'Select',
      componentSrc: SelectSrc,
    }, {
      componentName: 'Option',
      componentSrc: OptionSrc,
    }, {
      componentName: 'OptGroup',
      componentSrc: OptGroupSrc,
    }]}
    examples={[{
      title: 'Default',
      description: 'A default variant allows selecting a single option.',
      example: <DefaultExample />,
      source: DefaultExampleSrc,
    }]}
  />
);

export default Index;
