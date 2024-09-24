import matplotlib.pyplot as plt
import numpy as np

fig, ax = plt.subplots(figsize=(20, 10))

x = np.linspace(0, 2*np.pi, 1000)
y = np.sin(x)

ax.plot(x, y, color='#3498db', linewidth=2)

ax.set_title('Ultra HD Sine Wave', fontsize=30)
ax.set_xlabel('X', fontsize=20)
ax.set_ylabel('Y', fontsize=20)

ax.tick_params(axis='both', which='major', labelsize=15)

plt.savefig('sine_wave.png', dpi=300, bbox_inches='tight')
