from rest_framework import serializers


class StressLevelInputSerializer(serializers.Serializer):
    anxiety_level = serializers.IntegerField(min_value=1,max_value=22)
    self_esteem = serializers.IntegerField(min_value=0,max_value=31)
    mental_health_history = serializers.IntegerField(min_value=0,max_value=1)
    depression = serializers.IntegerField(min_value=0,max_value=28)

    headache = serializers.IntegerField(min_value=0,max_value=5)
    blood_pressure = serializers.IntegerField(min_value=1,max_value=3)
    sleep_quality = serializers.IntegerField(min_value=1,max_value=5)
    breathing_problem = serializers.IntegerField(min_value=1,max_value=5)

    noise_level = serializers.IntegerField(min_value=1,max_value=5)
    living_conditions = serializers.IntegerField(min_value=1,max_value=5)
    safety = serializers.IntegerField(min_value=1,max_value=5)
    basic_needs = serializers.IntegerField(min_value=1,max_value=5)

    academic_performance = serializers.IntegerField(min_value=1,max_value=5)
    study_load = serializers.IntegerField(min_value=1,max_value=5)
    teacher_student_relationship = serializers.IntegerField(min_value=1,max_value=5)
    future_career_concerns = serializers.IntegerField(min_value=1,max_value=5)

    social_support = serializers.IntegerField(min_value=1,max_value=5)
    peer_pressure = serializers.IntegerField(min_value=1,max_value=5)
    extracurricular_activities = serializers.IntegerField(min_value=1,max_value=5)
    bullying = serializers.IntegerField(min_value=1,max_value=3)