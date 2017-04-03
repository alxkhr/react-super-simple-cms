rsscContent = {
  title: 'foo title',
  projects: [
    {
      anchor: 'project1',
      title: 'some title',
      imageSources: ['assets/example1-image.jpg'],
      thumbnailSource: 'assets/example1-thumb.jpg',
      thumbnailHoverSource: 'assets/example1-hover-thumb.jpg',
      summary: 'some *description* about the project',
      specification: { one: 'foo', two: 'bar', three: 'baz' },
    },
    {
      anchor: 'project2',
      title: 'some other title',
      imageSources: [
        'assets/example2a-image.jpg',
        'assets/example2b-image.jpg',
        'assets/example2c-image.jpg',
      ],
      thumbnailSource: 'assets/example2-thumb.jpg',
      thumbnailHoverSource: 'assets/example2-hover-thumb.jpg',
      summary: 'some _other_ description about the project',
      specification: { foo: 'barbaz' },
    },
    {
      anchor: 'project3',
      title: 'some third title',
      imageSources: ['assets/example3a-image.jpg', 'assets/example3b-image.jpg'],
      thumbnailSource: 'assets/example3-thumb.jpg',
      thumbnailHoverSource: 'assets/example3-hover-thumb.jpg',
      summary: 'some **third** description about the project',
      specification: { one: 'foo', two: 'bar' },
    },
  ],
  projectOverview: {
    navigationTitle: 'Projekte',
    anchor: 'overview',
  },
  team: {
    navigationTitle: 'Team',
    anchor: 'team',
    portrait: 'portrait-image.jpg',
    biography: 'some foo biography',
    employees: ['personFoo', 'personBar', 'personBaz'],
  },
  contact: {
    navigationTitle: 'Kontakt',
    anchor: 'contact',
    phone: 'foo-number',
    email: 'foo.email@address.bar',
    address: 'foo, address',
  },
  disclaimer: {
    anchor: 'disclaimer',
    text: 'some foo disclaimer',
  },
};
