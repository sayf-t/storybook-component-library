// src/documentation/colours.stories.tsx

import { Meta, StoryFn } from "@storybook/react";
import styles from './colours.module.css';

export default {
  title: "Documentation/Colours",
} as Meta;

const Template: StoryFn = () => (
    <div>
        <h1 className={styles.falconuiCore}>Welcome to FalconUI</h1>
        <p>Explore how FalconUI utilizes colors to enhance user experience</p>
        
        <h2 className={styles.sectionTitle}>Logo and Brand Colours</h2>
        <div className={styles.colorSection}>
            <div className={styles.colorItem}>
                <div className={styles.colorSquare} style={{ backgroundImage: 'linear-gradient(to bottom right, #000000, #0D0E40)' }}></div>
                <p>Logo Gradient - Black to Deep Blue (#000000 to #0D0E40)</p>
            </div>
            <div className={styles.colorItem}>
                <div className={styles.colorSquare} style={{ backgroundColor: '#7c51e9' }}></div>
                <p>FalconUI Core - #7c51e9</p>
            </div>
        </div>
        
        <h2 className={styles.sectionTitle}>Primary Colours</h2>
        <div className={styles.colorSection}>
            <div className={styles.colorItem}>
                <div className={styles.colorSquare} style={{ backgroundColor: '#1976d2' }}></div>
                <p>Light Mode Primary - #1976d2</p>
            </div>
            <div className={styles.colorItem}>
                <div className={styles.colorSquare} style={{ backgroundColor: '#7c51e9' }}></div>
                <p>Dark Mode Primary - #7c51e9</p>
            </div>
        </div>
        
        <h2 className={styles.sectionTitle}>Secondary Colours</h2>
        <div className={styles.colorSection}>
            <div className={styles.colorItem}>
                <div className={styles.colorSquare} style={{ backgroundColor: '#f44336' }}></div>
                <p>Secondary - #f44336</p>
            </div>
        </div>
        
        <h2 className={styles.sectionTitle}>Background Colours</h2>
        <div className={styles.colorSection}>
            <div className={styles.colorItem}>
                <div className={styles.colorSquare} style={{ backgroundColor: '#f5f5f5' }}></div>
                <p>Light Mode Background - #f5f5f5</p>
            </div>
            <div className={styles.colorItem}>
                <div className={styles.colorSquare} style={{ backgroundColor: '#121923' }}></div>
                <p>Dark Mode Background - #121923</p>
            </div>
            <div className={styles.colorItem}>
                <div className={styles.colorSquare} style={{ backgroundColor: '#f5f5f5' }}></div>
                <p>Light Mode Paper - #f5f5f5</p>
            </div>
            <div className={styles.colorItem}>
                <div className={styles.colorSquare} style={{ backgroundColor: '#121923' }}></div>
                <p>Dark Mode Paper - #121923</p>
            </div>
        </div>
        
        <h2 className={styles.sectionTitle}>Text Colours</h2>
        <div className={styles.colorSection}>
            <div className={styles.colorItem}>
                <div className={styles.colorSquare} style={{ backgroundColor: 'rgba(0, 0, 0, 0.87)' }}></div>
                <p>Light Mode Primary Text - rgba(0, 0, 0, 0.87)</p>
            </div>
            <div className={styles.colorItem}>
                <div className={styles.colorSquare} style={{ backgroundColor: 'rgba(0, 0, 0, 0.54)' }}></div>
                <p>Light Mode Secondary Text - rgba(0, 0, 0, 0.54)</p>
            </div>
            <div className={styles.colorItem}>
                <div className={styles.colorSquare} style={{ backgroundColor: '#f5f5f5' }}></div>
                <p>Dark Mode Primary Text - #f5f5f5</p>
            </div>
        </div>
    </div>
);

export const Colours = Template.bind({});
