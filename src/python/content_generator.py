"""
Python content generator for Mental Health Hub
This module provides AI-powered content generation for mental health support.
"""

import json
import random
from datetime import datetime


def get_motivational_message(category: str = "general") -> dict:
    """
    Generate motivational messages for different mental health categories.
    
    Args:
        category: The category of mental health content (general, anxiety, depression, stress)
    
    Returns:
        dict containing message, category, and metadata
    """
    
    messages = {
        "general": [
            {"text": "Your feelings are valid. It's okay to not be okay.", "emoji": "💙"},
            {"text": "Every day is a new opportunity to prioritize your mental health.", "emoji": "🌟"},
            {"text": "You are stronger than you think and braver than you believe.", "emoji": "🦋"},
            {"text": "Self-care isn't selfish; it's essential.", "emoji": "🌸"},
            {"text": "Progress, not perfection, is the goal.", "emoji": "📈"},
        ],
        "anxiety": [
            {"text": "Take a deep breath. You're safe right now.", "emoji": "🌬️"},
            {"text": "Anxiety is temporary. This feeling will pass.", "emoji": "⏰"},
            {"text": "You've survived every difficult day so far.", "emoji": "💪"},
            {"text": "Worrying doesn't empty tomorrow of its troubles; it empties today of its peace.", "emoji": "🕊️"},
            {"text": "One breath at a time. You got this.", "emoji": "🧘"},
        ],
        "depression": [
            {"text": "Your presence in this world matters more than you know.", "emoji": "💫"},
            {"text": "Some days are hard, but you are not defined by your hardest days.", "emoji": "🌈"},
            {"text": "There is hope, even when it feels impossible to see.", "emoji": "🔦"},
            {"text": "You deserve support and kindness, especially from yourself.", "emoji": "🤗"},
            {"text": "This moment is not your whole story.", "emoji": "📖"},
        ],
        "stress": [
            {"text": "It's okay to take breaks. Rest is productive too.", "emoji": "☕"},
            {"text": "You're doing the best you can, and that's enough.", "emoji": "✓"},
            {"text": "Pause. Breathe. Reset.", "emoji": "🔄"},
            {"text": "Stress is a signal to take care of yourself, not a sign of failure.", "emoji": "📡"},
            {"text": "You have the power to create calm in your chaos.", "emoji": "⚡"},
        ],
        "teens": [
            {"text": "Your teen years are just one chapter of your story.", "emoji": "📚"},
            {"text": "It's normal to feel confused about who you are.", "emoji": "🔍"},
            {"text": "Your worth isn't determined by likes or followers.", "emoji": "💯"},
            {"text": "Talk to someone you trust. You don't have to handle everything alone.", "emoji": "🗣️"},
            {"text": "The awkward feelings pass, but your strength stays.", "emoji": "🌱"},
        ],
    }
    
    category_messages = messages.get(category, messages["general"])
    selected = random.choice(category_messages)
    
    return {
        "message": selected["text"],
        "emoji": selected["emoji"],
        "category": category,
        "generated_at": datetime.now().isoformat()
    }


def get_resource_recommendations(topic: str, age_group: str = "adults") -> dict:
    """
    Generate resource recommendations based on topic and age group.
    
    Args:
        topic: The mental health topic
        age_group: Target age group (adults, teens)
    
    Returns:
        dict containing resource recommendations
    """
    
    resources = {
        "adults": {
            "anxiety": [
                {"title": "Understanding Anxiety Disorders", "type": "article", "duration": "5 min read"},
                {"title": "Breathing Exercises for Calm", "type": "guide", "duration": "3 min video"},
                {"title": "CBT Techniques for Anxiety", "type": "workshop", "duration": "15 min"},
            ],
            "depression": [
                {"title": "Recognizing Depression Signs", "type": "article", "duration": "6 min read"},
                {"title": "Behavioral Activation Guide", "type": "guide", "duration": "10 min"},
                {"title": "Building a Support Network", "type": "workshop", "duration": "20 min"},
            ],
            "stress": [
                {"title": "Work-Life Balance Strategies", "type": "article", "duration": "7 min read"},
                {"title": "Mindfulness for Stress Relief", "type": "guide", "duration": "5 min audio"},
                {"title": "Stress Management Toolkit", "type": "workshop", "duration": "25 min"},
            ],
        },
        "teens": {
            "anxiety": [
                {"title": "Anxiety Explained Simply", "type": "article", "duration": "4 min read"},
                {"title": "Quick Calm-Down Hacks", "type": "guide", "duration": "2 min video"},
                {"title": "Talking About Anxiety", "type": "workshop", "duration": "10 min"},
            ],
            "depression": [
                {"title": "Feeling Down: What It Means", "type": "article", "duration": "5 min read"},
                {"title": "Mood Boosters That Work", "type": "guide", "duration": "3 min"},
                {"title": "Reaching Out for Help", "type": "workshop", "duration": "12 min"},
            ],
            "stress": [
                {"title": "School Stress Survival Guide", "type": "article", "duration": "6 min read"},
                {"title": "Study Break Ideas", "type": "guide", "duration": "2 min"},
                {"title": "Balancing School & Life", "type": "workshop", "duration": "15 min"},
            ],
        },
    }
    
    topic_resources = resources.get(age_group, {}).get(topic, resources["adults"].get("stress", []))
    
    return {
        "topic": topic,
        "age_group": age_group,
        "resources": topic_resources,
        "generated_at": datetime.now().isoformat()
    }


def generate_wellness_tip() -> dict:
    """
    Generate a random wellness tip.
    
    Returns:
        dict containing wellness tip
    """
    
    tips = [
        {"tip": "Drink a glass of water", "category": "physical", "difficulty": "easy"},
        {"tip": "Take a 5-minute walk outside", "category": "physical", "difficulty": "easy"},
        {"tip": "Write down three things you're grateful for", "category": "mental", "difficulty": "easy"},
        {"tip": "Practice deep breathing for 2 minutes", "category": "relaxation", "difficulty": "easy"},
        {"tip": "Connect with a friend or family member", "category": "social", "difficulty": "medium"},
        {"tip": "Take a break from screens for 15 minutes", "category": "digital wellness", "difficulty": "medium"},
        {"tip": "Do something creative for 10 minutes", "category": "creative", "difficulty": "medium"},
        {"tip": "Practice a random act of kindness", "category": "social", "difficulty": "easy"},
        {"tip": "Listen to a favorite song", "category": "emotional", "difficulty": "easy"},
        {"tip": "Spend time in nature", "category": "physical", "difficulty": "medium"},
    ]
    
    selected = random.choice(tips)
    selected["generated_at"] = datetime.now().isoformat()
    
    return selected


def get_topic_overview(topic: str) -> dict:
    """
    Get an overview of a mental health topic.
    
    Args:
        topic: The mental health topic
    
    Returns:
        dict containing topic overview
    """
    
    overviews = {
        "anxiety": {
            "title": "Anxiety",
            "definition": "Anxiety is your body's natural response to stress. It's a feeling of fear or apprehension about what's to come.",
            "symptoms": ["Persistent worrying", "Racing thoughts", "Physical symptoms like rapid heartbeat", "Difficulty concentrating"],
            "coping_strategies": ["Deep breathing exercises", "Progressive muscle relaxation", "Cognitive behavioral therapy", "Regular exercise"],
            "when_to_seek_help": "If anxiety is affecting your daily life, relationships, or work for more than two weeks."
        },
        "depression": {
            "title": "Depression",
            "definition": "Depression is a common but serious mood disorder that affects how you feel, think, and handle daily activities.",
            "symptoms": ["Persistent sadness or emptiness", "Loss of interest in activities", "Changes in sleep or appetite", "Fatigue and low energy"],
            "coping_strategies": ["Stay connected with others", "Set small, achievable goals", "Physical activity", "Professional therapy"],
            "when_to_seek_help": "If symptoms persist for more than two weeks or include thoughts of self-harm."
        },
        "stress": {
            "title": "Stress",
            "definition": "Stress is your body's response to pressure or demands. A little stress can be motivating, but too much can be harmful.",
            "symptoms": ["Headaches or muscle tension", "Irritability or anger", "Feeling overwhelmed", "Sleep problems"],
            "coping_strategies": ["Time management", "Relaxation techniques", "Physical activity", "Setting boundaries"],
            "when_to_seek_help": "If stress is chronic, affecting your health, or causing thoughts of self-harm."
        },
        "grief": {
            "title": "Grief",
            "definition": "Grief is a natural response to loss. It can occur after losing a loved one, a relationship, a job, or any significant change.",
            "symptoms": ["Sadness and yearning", "Shock and denial", "Anger and guilt", "Physical symptoms like fatigue"],
            "coping_strategies": ["Allow yourself to feel", "Talk to trusted people", "Create rituals to honor loss", "Seek professional support if needed"],
            "when_to_seek_help": "If grief feels overwhelming or is significantly impacting your ability to function."
        },
    }
    
    overview = overviews.get(topic, {
        "title": topic.title(),
        "definition": f"Information about {topic}",
        "symptoms": [],
        "coping_strategies": [],
        "when_to_seek_help": "Consult with a healthcare professional for personalized advice."
    })
    
    overview["generated_at"] = datetime.now().isoformat()
    
    return overview


if __name__ == "__main__":
    # Test the module
    print(json.dumps(get_motivational_message("anxiety"), indent=2))
    print(json.dumps(get_resource_recommendations("anxiety", "adults"), indent=2))
    print(json.dumps(generate_wellness_tip(), indent=2))
    print(json.dumps(get_topic_overview("depression"), indent=2))
