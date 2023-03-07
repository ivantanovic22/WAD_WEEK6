const controller = require('../controllers/guestbookControllers.js')  

test('responds to /new', () => {
    const req = {};
    const res = { text: '',
        	    send: function(input) { this.text = input } 
    };
    controller.new_entry(req, res);
    expect(res.text).toEqual('<h1>Not yet implemented: show a new entry page.</h1>');
 })
test('responds to /guestbook', () => {
        const req = {};
        const res = { text: '',
            	    send: function(input) { this.text = input } 
        };
        controller.entries_list(req, res);
        expect(res.text).toEqual('<h1>Guestbook Messages</h1><p>Not yet implemented:will show a list of guest book entries.</p>');
     })
test('landing page renders', () => {
      const req = {}
      const res = { render: jest.fn() }
      controller.landing_page(req, res)
      expect(res.render.mock.calls[0][0]).toBe('entries')
    })
    test('about page renders', () => {
          const req = {}
          const res = {status: jest.fn(), 
                        redirect: jest.fn() 
                        }
          controller.about_page(req, res)
        expect(res.status.mock.calls[0][0]).toBe(200)
          expect(res.redirect.mock.calls[0][0]).toBe('/about.html')
        })
    
    test('404 handler renders', () => {
        const req = {}
        const res = { status: jest.fn(),
                    type: jest.fn(),
                    send:jest.fn()
                }
controller.notFound(req, res)
expect(res.status.mock.calls[0][0]).toBe(404)
expect(res.type.mock.calls[0][0]).toBe('text/plain')
expect(res.send.mock.calls[0][0]).toEqual('404 Not found.')
})

test('500 handler renders', () => {
    const err = new Error('some error')
    const req = {}
    const res = { status: jest.fn(),
                type: jest.fn(),
                send:jest.fn()
            }
    const next = {}
controller.serverError(err,req, res, next)
expect(res.status.mock.calls[0][0]).toBe(500)
expect(res.type.mock.calls[0][0]).toBe('text/plain')
expect(res.send.mock.calls[0][0]).toEqual('Internal Server Error.')
})


test('responds to /new', () => {
        const req = {};
        const res = { text: '',
            	    send: function(input) { this.text = input } 
        };
        controller.new_entry(req, res);
        expect(res.text).toEqual('<h1>Not yet implemented: show a new entry page.</h1>');
     })

// // The method we want to test
// function add(x, y) {
//         return x + y
//       }
//       
//     // A test suite
//       describe("add method", () => {
//       
//        // A unit test
//         it("should return 2", () => {
//           // An assertion
//           expect(add(1, 1)).toBe(2)
//         })
//       })

