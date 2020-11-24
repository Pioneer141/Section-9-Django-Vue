from django.contrib.auth.models import User, Group
from rest_framework import serializers
from OJ_app.models import Question, UserExtension, Answer, Comment, TestWJL


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        # field = ('url', 'username', 'email')
        fields = '__all__'


class UserExtensionSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserExtension
        # fields = ('url', 'student_id', 'score', 'ranking', 'Question_ID', 'Answer_ID')
        fields = '__all__'


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        # fields = ('url', 'questioner', 'create_time', 'question_number', 'submission_number', 'problem_description',
        #           'resolution_status', 'Problem_classification', 'Code_type')
        fields = '__all__'


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        # fields = (
        # 'url', 'respondents', 'Correspondence_problem', 'create_time', 'Debug_successful_code', 'comment', 'resolvent')
        fields = '__all__'


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        # fields = ('url', 'content', 'creates_time', 'Reviewers')
        fields = '__all__'


class TestWJLSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestWJL
        fields = '__all__'
