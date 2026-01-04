import tkinter as tk
from tkinter import messagebox
import json
import os

class PokemonEntryApp:
    def __init__(self, master):
        self.master = master
        master.title("Pokémon Entry Generator")

        self.label_name = tk.Label(master, text="Pokémon Name:")
        self.label_name.pack()
        self.entry_name = tk.Entry(master)
        self.entry_name.pack()

        self.label_number = tk.Label(master, text="Pokémon Number:")
        self.label_number.pack()
        self.entry_number = tk.Entry(master)
        self.entry_number.pack()

        self.label_type = tk.Label(master, text="Pokémon Type (comma-separated):")
        self.label_type.pack()
        self.entry_type = tk.Entry(master)
        self.entry_type.pack()

        self.label_evolution = tk.Label(master, text="Pokémon Evolution (leave blank if none):")
        self.label_evolution.pack()
        self.entry_evolution = tk.Entry(master)
        self.entry_evolution.pack()

        self.button_generate = tk.Button(master, text="Generate Entry", command=self.generate_entry)
        self.button_generate.pack()

    def generate_entry(self):
        name = self.entry_name.get()
        number = self.entry_number.get()
        types = self.entry_type.get().split(',')
        evolution = self.entry_evolution.get()

        if not name or not number or not types:
            messagebox.showerror("Error", "Please fill in all required fields.")
            return

        entry = {
            "name": name.strip(),
            "number": number.strip(),
            "type": [t.strip() for t in types],
            "evolution": evolution.strip() if evolution else None
        }

        self.save_entry(entry)

        messagebox.showinfo("Success", "Pokémon entry generated successfully!")

    def save_entry(self, entry):
        save_path = r"E:\Family\Pokedex\entries.json"
        if os.path.exists(save_path):
            with open(save_path, "r") as file:
                data = json.load(file)
        else:
            data = []

        data.append(entry)

        with open(save_path, "w") as file:
            json.dump(data, file, indent=4)

if __name__ == "__main__":
    root = tk.Tk()
    app = PokemonEntryApp(root)
    root.mainloop()
