import turtle

# Initialize turtle object
pen = turtle.Turtle()
pen.speed(0) # Set speed to fastest
pen.hideturtle() # Hide the turtle icon

# Example 1: Draw a square
for _ in range(4):
    pen.forward(100)
    pen.right(90)

# Reset turtle position
pen.penup()
pen.goto(0,-150)
pen.pendown()

# Example 2: Draw a circle
pen.circle(60)

# Reset turtle position
pen.penup()
pen.goto(-200,0)
pen.pendown()

# Example 3: Draw a star
for _ in range(5):
    pen.forward(100)
    pen.right(144)

# Keep the window open until it is closed manually
turtle.done()
