/**
 * Python integration utility for Next.js
 * This module provides functions to execute Python scripts from TypeScript
 */

import { execSync } from 'child_process';
import path from 'path';

export interface PythonResult {
  success: boolean;
  data?: any;
  error?: string;
}

/**
 * Execute a Python script and return the result
 * @param scriptPath - Path to the Python script (relative to project root)
 * @param functionName - Name of the function to call
 * @param args - Arguments to pass to the Python function
 */
export function executePython(
  scriptPath: string,
  functionName: string,
  args: any[] = []
): PythonResult {
  try {
    const projectRoot = process.cwd();
    const fullPath = path.join(projectRoot, scriptPath);
    
    // Build the Python command with proper escaping
    // Use single quotes for strings in Python to avoid shell escaping issues
    const pythonArgs = args.map(arg => {
      if (typeof arg === 'string') {
        return `'${arg.replace(/'/g, "\\'")}'`; // Single-quoted with escape
      }
      return JSON.stringify(arg);
    }).join(', ');
    
    // Write Python script to temp file and execute it
    const fs = require('fs');
    const tempScript = `/tmp/python_script_${Date.now()}.py`;
    const pythonCode = `
import sys
import json
sys.path.insert(0, '${path.dirname(fullPath)}')
from ${path.basename(scriptPath).replace('.py', '')} import ${functionName}
result = ${functionName}(${pythonArgs})
print(json.dumps(result))
`;
    fs.writeFileSync(tempScript, pythonCode);
    
    const output = execSync(`python3 ${tempScript}`, { encoding: 'utf-8' });
    
    // Clean up temp file
    fs.unlinkSync(tempScript);
    
    const data = JSON.parse(output.trim());
    
    return { success: true, data };
  } catch (error: any) {
    console.error('Python execution error:', error);
    return { 
      success: false, 
      error: error.message || 'Unknown error occurred' 
    };
  }
}

/**
 * Get a motivational message from Python
 */
export function getMotivationalMessage(category: string = 'general') {
  return executePython('src/python/content_generator.py', 'get_motivational_message', [category]);
}

/**
 * Get resource recommendations from Python
 */
export function getResourceRecommendations(topic: string, ageGroup: string = 'adults') {
  return executePython('src/python/content_generator.py', 'get_resource_recommendations', [topic, ageGroup]);
}

/**
 * Get a wellness tip from Python
 */
export function getWellnessTip() {
  return executePython('src/python/content_generator.py', 'generate_wellness_tip', []);
}

/**
 * Get topic overview from Python
 */
export function getTopicOverview(topic: string) {
  return executePython('src/python/content_generator.py', 'get_topic_overview', [topic]);
}
