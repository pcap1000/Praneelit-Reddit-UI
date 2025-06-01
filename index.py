from manim import *

class HelloWorld(Scene):
    def construct(self):
        text = Text("Hello, World!")  # Create text
        self.play(Write(text))  # Animate writing text
        self.wait(2)  # Wait for 2 seconds
