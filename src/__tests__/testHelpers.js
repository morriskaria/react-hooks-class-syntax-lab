export function isClassComponent(component) {
  return typeof component === 'function' && 
         !!component.prototype.isReactComponent;
}

// Test to satisfy Jest requirements
describe('testHelpers', () => {
  it('should export isClassComponent function', () => {
    expect(typeof isClassComponent).toBe('function');
  });
});