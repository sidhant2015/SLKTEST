const  { Person, Dictionary}  = require ('../src/spycreate');
describe('Person', function() {
   let person = new Person;
   let dictionary = new Dictionary;
 
    beforeEach(function() {
     person =  person;
     dictionary =  dictionary;
    });
   
 
    it('should say hello world correctly', function() {
      spyOn(dictionary, 'hello').and.returnValue('Praveen');
      spyOn(dictionary, 'world').and.returnValue('H');
 
      let result = person.sayHelloWorld(dictionary);
 
      expect(result).toBe('Praveen H');
      expect(dictionary.hello).toHaveBeenCalled();
      expect(dictionary.world).toHaveBeenCalled();
    });
 
    it('should call the hello and world methods of the dictionary', function() {
      spyOn(dictionary, 'hello');
      spyOn(dictionary, 'world');
 
      person.sayHelloWorld(dictionary);
 
      expect(dictionary.hello).toHaveBeenCalled();
      expect(dictionary.world).toHaveBeenCalled();
    });
    it('should say hello world correctly', function() {
      spyOn(dictionary, 'hello').and.returnValue('SLK');
      spyOn(dictionary, 'world').and.returnValue('Software');
 
      let result = person.sayHelloWorld(dictionary);
 
      expect(result).toBe('SLK Software');
      expect(dictionary.hello).toHaveBeenCalled();
      expect(dictionary.world).toHaveBeenCalled();
    });
  });