if (figma.editorType === 'figma') {
  figma.showUI(__html__);

  figma.ui.onmessage = (msg: { type: string }) => {
    if (msg.type === 'import-tokens') {
      // biome-ignore lint/suspicious/noConsole: <testing purposes>
      console.log('Importing tokens');
      figma.closePlugin();
    }
  };
}
