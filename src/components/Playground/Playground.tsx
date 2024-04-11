import {
  SandpackPreview,
  SandpackProvider,
  SandpackCodeEditor,
  SandpackConsole,
  SandpackTests,
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
  showTabs = true,
  showConsole = false,
  showPreview = true,
  showTests = false,
  template = 'react-ts',
}: {
  wrapperClassNames?: string;
  files: any;
  options?: SandpackProviderProps;
  showTabs?: boolean;
  showConsole?: boolean;
  showPreview?: boolean;
  showTests?: boolean;
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
        {showTabs && (
          <header className="border-b border-charade-200">
            <CustomTabs />
          </header>
        )}
        <SandpackLayout>
          <SandpackCodeEditor showTabs={false} showLineNumbers />
          {showPreview && (
            <SandpackPreview showRefreshButton={false} showOpenInCodeSandbox />
          )}
          {showTests && <SandpackTests />}
          {showConsole && <SandpackConsole />}
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}
