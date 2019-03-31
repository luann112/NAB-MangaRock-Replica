export const SOURCES = {
  STYLES: [
    'https://necolas.github.io/normalize.css/latest/normalize.css',
    'https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css',
    'https://fonts.googleapis.com/css?family=Roboto+Condensed:300|Roboto:100,400,700',
  ],
}

export const MENU = [
  {
    id: 0,
    label: 'Home',
    to: '#'
  },
  {
    id: 1,
    label: 'All Manga',
    to: '#'    
  },
  {
    id: 2,
    label: 'Latest Updates',
    to: '#'    
  },
  {
    id: 3,
    label: 'Wiki',
    sub: [
      { 
        id: 0,        
        label: 'Genres',
        to: '#', 
      },
      {
        id: 1,                
        label: 'Character',
        to: '#',        
      },
      {
        id: 2,        
        label: 'Author',
        to: '#',        
      },
    ]
  }
]

export const SIDE_TAB_MENU = [
  {
    id: 0,
    label: 'Home',
    to: '#'
  },
  {
    id: 1,
    label: 'All Manga',
    to: '#'    
  },
  {
    id: 2,
    label: 'Latest Updates',
    to: '#'    
  },
  { 
    id: 3,        
    label: 'Genres',
    to: '#', 
  },
  {
    id: 4,                
    label: 'Character',
    to: '#',        
  },
  {
    id: 5,        
    label: 'Author',
    to: '#',        
  },
];