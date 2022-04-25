export function hasChildren(item) {
    const { items } = item;
  
    if (items === undefined) {
      return false;
    }
  
    if (items.constructor !== Array) {
      return false;
    }
  
    if (items.length === 0) {
      return false;
    }
  
    return true;
  }
  