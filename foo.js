import BaseFoo from './base/foo';

export default function Foo() {
}

Foo.prototype = Object.create(BaseFoo.prototype);
Foo.constructor = Foo;
Foo.__proto__ = BaseFoo;
