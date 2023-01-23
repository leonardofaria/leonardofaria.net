import {
  SandpackPreview,
  SandpackProvider,
  SandpackCodeEditor,
  SandpackConsole,
  SandpackLayout,
  SandpackPredefinedTemplate,
} from '@codesandbox/sandpack-react';
import { githubLight } from '@codesandbox/sandpack-themes';
import CustomTabs from './CustomTabs';

export function Playground({
  wrapperClassNames = 'full-width',
  files,
  showConsole = false,
  showPreview = true,
  template = 'react-ts',
}: {
  wrapperClassNames?: string;
  files: any;
  showConsole?: boolean;
  showPreview?: boolean;
  template?: SandpackPredefinedTemplate;
}) {
  return (
    <div className={wrapperClassNames}>
      <SandpackProvider files={files} template={template} theme={githubLight}>
        <header className="border-b border-gray-200">
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
