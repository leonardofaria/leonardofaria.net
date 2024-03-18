import {
  SandpackPreview,
  SandpackProvider,
  SandpackCodeEditor,
  SandpackConsole,
  SandpackLayout,
  SandpackProviderProps,
  SandpackPredefinedTemplate,
} from '@codesandbox/sandpack-react';
import { githubLight } from '@codesandbox/sandpack-themes';
import { FULL_WIDTH_WRAPPER } from 'src/lib/rehypePrettyCode';
import CustomTabs from './CustomTabs';

export function Playground({
  wrapperClassNames = FULL_WIDTH_WRAPPER,
  files,
  options,
  showConsole = false,
  showPreview = true,
  template = 'react-ts',
}: {
  wrapperClassNames?: string;
  files: any;
  options?: SandpackProviderProps;
  showConsole?: boolean;
  showPreview?: boolean;
  template?: SandpackPredefinedTemplate;
}) {
  return (
    <div className={wrapperClassNames}>
      <SandpackProvider
        files={files}
        options={options}
        template={template}
        theme={githubLight}
      >
        <header className="border-b border-charade-200">
          <CustomTabs />
        </header>
        <SandpackLayout>
          <SandpackCodeEditor showTabs={false} showLineNumbers />
          {showPreview && (
            <SandpackPreview showRefreshButton={false} showOpenInCodeSandbox />
          )}
          {showConsole && <SandpackConsole />}
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}
