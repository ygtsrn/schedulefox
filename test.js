try {
    try {
      throw new Error('oops');
    }
    finally {
      console.log('finally');
    }
  }
  catch (ex) {
    console.error('outer', ex.message);
  }
console.log("//////////////////////////////////////////////////////");
try {
    try {
      throw new Error('oops');
    }
    catch (ex) {
      console.error('inner', ex.message);
      throw ex;
    }
    finally {
      console.log('finally');
    }
  }
  catch (ex) {
    console.error('outer', ex.message);
  }