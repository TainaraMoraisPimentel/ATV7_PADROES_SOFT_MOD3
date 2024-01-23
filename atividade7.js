class Editor {
    constructor() {
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      const index = this.observers.indexOf(observer);
      if (index > -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notifyObservers() {
      for (const observer of this.observers) {
        observer.update();
      }
    }
  }
  
  class TextEditor extends Editor {
    constructor() {
      super();
      this.lines = [];
    }
  
    insertLine(lineNumber, text) {
      this.lines.splice(lineNumber, 0, text);
      this.notifyObservers();
    }
  
    removeLine(lineNumber) {
      this.lines.splice(lineNumber, 1);
      this.notifyObservers();
    }
  
    open() {
      console.log('Editor aberto.');
      let line = '';
      while (line !== 'eof') {
        line = prompt('Digite uma linha de texto:');
        if (line !== 'eof') {
          this.lines.push(line);
        }
      }
      this.notifyObservers();
    }
  
    save() {
      console.log('Editor salvo.');
      console.log(this.lines.join('\n'));
    }
  }
  
  class TextEditorObserver {
    constructor(editor) {
      this.editor = editor;
      this.editor.addObserver(this);
    }
  
    update() {
      console.log('Editor atualizado.');
    }
  }
  
  const textEditor = new TextEditor();
  const textEditorObserver = new TextEditorObserver(textEditor);
  
  textEditor.open();
  textEditor.save();
  